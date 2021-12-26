import Foundation



/*
 * Complete the 'bigSorting' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY unsorted as parameter.
 */

func bigSorting(unsorted: [String]) -> [String] {
    // Write your code here

}

let stdout = ProcessInfo.processInfo.environment["OUTPUT_PATH"]!
FileManager.default.createFile(atPath: stdout, contents: nil, attributes: nil)
let fileHandle = FileHandle(forWritingAtPath: stdout)!

guard let n = Int((readLine()?.trimmingCharacters(in: .whitespacesAndNewlines))!)
else { fatalError("Bad input") }

var unsorted = [String]()

for _ in 1...n {
    guard let unsortedItem = readLine() else { fatalError("Bad input") }

    unsorted.append(unsortedItem)
}

guard unsorted.count == n else { fatalError("Bad input") }

let result = bigSorting(unsorted: unsorted)

fileHandle.write(result.joined(separator: "\n").data(using: .utf8)!)
fileHandle.write("\n".data(using: .utf8)!)
