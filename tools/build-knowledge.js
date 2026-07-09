const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();

const IGNORE = [".git", "tools", "knowledge"];

function scan(folder, list) {

    const items = fs.readdirSync(folder, { withFileTypes: true });

    for (const item of items) {

        const fullPath = path.join(folder, item.name);

        if (item.isDirectory()) {

            if (IGNORE.includes(item.name)) continue;

            scan(fullPath, list);

        } else {

            if (
                (item.name.endsWith(".md") || item.name.endsWith(".txt")) &&
                item.name !== "KNOWLEDGE_EXPORT.md"
            ) {
                list.push(fullPath);
            }

        }
    }

}

const folders = fs.readdirSync(ROOT, { withFileTypes: true });

for (const folder of folders) {

    if (!folder.isDirectory()) continue;

    if (IGNORE.includes(folder.name)) continue;

    const files = [];

    scan(path.join(ROOT, folder.name), files);

    if (files.length === 0) continue;

    files.sort();

    let text = "";

    for (const file of files) {

        text +=
`# =====================================================
# FILE : ${path.relative(ROOT, file)}
# =====================================================

`;

        text += fs.readFileSync(file, "utf8");
        text += "\n\n";
    }

    const output = path.join(
        ROOT,
        "knowledge",
        `${folder.name}.md`
    );

    fs.writeFileSync(output, text, "utf8");

    console.log(`✔ ${folder.name}.md (${files.length} ไฟล์)`);

}

console.log("\nเสร็จทั้งหมด");