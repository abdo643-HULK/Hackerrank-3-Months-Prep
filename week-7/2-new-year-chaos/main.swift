import Foundation

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

func minimumBribes(q: [Int]) -> Void {
    // Write your code here

}

guard let t = Int((readLine()?.trimmingCharacters(in: .whitespacesAndNewlines))!)
else { fatalError("Bad input") }

for tItr in 1...t {
    guard let n = Int((readLine()?.trimmingCharacters(in: .whitespacesAndNewlines))!)
    else { fatalError("Bad input") }

    guard let qTemp = readLine()?.replacingOccurrences(of: "\\s+$", with: "", options: .regularExpression) else { fatalError("Bad input") }

    let q: [Int] = qTemp.split(separator: " ").map {
        if let qItem = Int($0) {
            return qItem
        } else { fatalError("Bad input") }
    }

    guard q.count == n else { fatalError("Bad input") }

    minimumBribes(q: q)
}
