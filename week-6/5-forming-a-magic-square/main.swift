import Foundation

/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

func formingMagicSquare(s: [[Int]]) -> Int {
    // Write your code here

}

let stdout = ProcessInfo.processInfo.environment["OUTPUT_PATH"]!
FileManager.default.createFile(atPath: stdout, contents: nil, attributes: nil)
let fileHandle = FileHandle(forWritingAtPath: stdout)!

var s = [[Int]]()

for _ in 1...3 {
    guard let sRowTemp = readLine()?.replacingOccurrences(of: "\\s+$", with: "", options: .regularExpression) else { fatalError("Bad input") }

    let sRow: [Int] = sRowTemp.split(separator: " ").map {
        if let sItem = Int($0) {
            return sItem
        } else { fatalError("Bad input") }
    }

    guard sRow.count == 3 else { fatalError("Bad input") }

    s.append(sRow)
}

guard s.count == 3 else { fatalError("Bad input") }

let result = formingMagicSquare(s: s)

fileHandle.write(String(result).data(using: .utf8)!)
fileHandle.write("\n".data(using: .utf8)!)
