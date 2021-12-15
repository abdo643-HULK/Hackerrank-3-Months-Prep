import Foundation

/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

func separateNumbers(s: String) -> Void {
    // Write your code here

}

guard let q = Int((readLine()?.trimmingCharacters(in: .whitespacesAndNewlines))!)
else { fatalError("Bad input") }

for qItr in 1...q {
    guard let s = readLine() else { fatalError("Bad input") }

    separateNumbers(s: s)
}
