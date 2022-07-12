const path = require('path')
const {readdirSync} = require("fs");

const childProcess = require('child_process')

const spawn = childProcess.spawn
const spawnSync = childProcess.spawnSync

const runShell = (shell) => {
    spawn(shell, {stdio: ['inherit', 'inherit', 'inherit'], shell: true})
}

const runShellSync = (shell) => {
    spawnSync(shell, {stdio: ['inherit', 'inherit', 'inherit'], shell: true})
}

const ifInstall = process.argv[2]


const excludeList = ['.git', '.idea', '.vscode', 'node_modules']

function getDirInfo() {

    const microAppsDirList = readdirSync(path.join(__dirname, 'micro-apps'), {withFileTypes: true})
    for (let microApp of microAppsDirList) {
        if (microApp.isDirectory() && !excludeList.some(i => i === microApp.name)) {
            if (ifInstall) {
                runShell(`cd ${path.join(__dirname, 'micro-apps', microApp.name)} && pnpm install && pnpm run dev`);
            } else {
                runShell(`cd ${path.join(__dirname, 'micro-apps', microApp.name)} && pnpm run dev`);
            }
        }

    }
    setTimeout(() => {
        if (ifInstall){
            runShell(`cd ${path.join(__dirname, 'main-app')} && pnpm install && pnpm run dev`);
        }else{
            runShell(`cd ${path.join(__dirname, 'main-app')} && pnpm run dev`);

        }
    }, 3000)
}


getDirInfo()
