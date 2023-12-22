import fs from "fs";
import { execSync } from "child_process";
import path from "path";


let entrypoint_path = path.join("src", "tick.ts");
let out_path = path.join("build", "release.wasm");

// Optional if all other required ENV variables are set.
let tools_path = process.env.TOOLS_PATH;
let tools_path_exists = fs.existsSync(tools_path);

function get_tool_executable(env_name, tool_exe_path) {
	let exe_path = process.env[env_name];
	if (exe_path === undefined || exe_path === null) {
		if (!tools_path_exists) {
			throw "Missing ENV 'TOOLS_PATH'.";
		}
		exe_path = path.join(tools_path, tool_exe_path);
	}
	return exe_path;
}


console.log(`Building "${out_path}"`);
execSync([
	"npx",
	"asc",
	`"${entrypoint_path}"`,
	"-b",
	`"${out_path}"`,
].join(" "));

console.log("Running wasm-opt.");
execSync([
	`"${get_tool_executable("WASM_OPT", path.join("binaryen", "bin", "wasm-opt"))}"`,
	`"${out_path}"`,
	"-o",
	`"${out_path}"`,
	"--enable-bulk-memory",
	"--enable-simd",
	"--enable-nontrapping-float-to-int",
	"--asyncify",
	"--strip-dwarf",
	"-O4",
].join(" "));

console.log(`Built "${out_path}"`);
