import Foundation

/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

func minimumNumber(n: Int, password: String) -> Int {
    // Return the minimum number of characters to make the password strong

}

let stdout = ProcessInfo.processInfo.environment["OUTPUT_PATH"]!
FileManager.default.createFile(atPath: stdout, contents: nil, attributes: nil)
let fileHandle = FileHandle(forWritingAtPath: stdout)!

guard let n = Int((readLine()?.trimmingCharacters(in: .whitespacesAndNewlines))!)
else { fatalError("Bad input") }

guard let password = readLine() else { fatalError("Bad input") }

let answer = minimumNumber(n: n, password: password)

fileHandle.write(String(answer).data(using: .utf8)!)
fileHandle.write("\n".data(using: .utf8)!)
