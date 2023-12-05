import fs from "fs"
import path from "path"

export function readJsonFile(filePath) {
    try {
        const fullPath = path.join(process.cwd(), filePath)
        const jsonData = fs.readFileSync(fullPath, "utf8")
        return JSON.parse(jsonData)
    } catch (error) {
        console.error("Error reading JSON file:", error)
        return null
    }
}
