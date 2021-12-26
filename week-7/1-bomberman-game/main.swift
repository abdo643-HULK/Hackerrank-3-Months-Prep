import Foundation

/*
 * Complete the 'bomberMan' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING_ARRAY grid
 */

func bomberMan(n: Int, grid: [String]) -> [String] {
    // Write your code here

}

let stdout = ProcessInfo.processInfo.environment["OUTPUT_PATH"]!
FileManager.default.createFile(atPath: stdout, contents: nil, attributes: nil)
let fileHandle = FileHandle(forWritingAtPath: stdout)!

guard let firstMultipleInputTemp = readLine()?.replacingOccurrences(of: "\\s+$", with: "", options: .regularExpression) else { fatalError("Bad input") }
let firstMultipleInput = firstMultipleInputTemp.split(separator: " ").map{ String($0) }

guard let r = Int(firstMultipleInput[0])
else { fatalError("Bad input") }

guard let c = Int(firstMultipleInput[1])
else { fatalError("Bad input") }

guard let n = Int(firstMultipleInput[2])
else { fatalError("Bad input") }

var grid = [String]()

for _ in 1...r {
    guard let gridItem = readLine() else { fatalError("Bad input") }

    grid.append(gridItem)
}

guard grid.count == r else { fatalError("Bad input") }

let result = bomberMan(n: n, grid: grid)

fileHandle.write(result.joined(separator: "\n").data(using: .utf8)!)
fileHandle.write("\n".data(using: .utf8)!)
