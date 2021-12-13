//
// Created by abous on 11/12/2021.
//

#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);

string rtrim(const string &);

vector<string> split(const string &);

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

void miniMaxSum(vector<int> arr) {
//    const auto sum = accumulate(arr.begin(), arr.end(), 0L);
//
//    long min = arr[0];
//    long max = min;
//    for (const auto num: arr) {
//        if (num < min) min = num;
//        if (num > max) max = num;
//    }
//
//    cout << (sum - max) << " " << (sum - min) << endl;

    sort(arr.begin(), arr.end());
    const auto n = arr.size() - 1;
    // adding the values without casting allows overflow and
    // that's the reason that I will be doing the exercises from now on in Typescript
    const long max = static_cast<long>(arr[n - 3]) +
                     static_cast<long>(arr[n - 2]) +
                     static_cast<long>(arr[n - 1]) +
                     static_cast<long>(arr[n]);

    const long min = static_cast<long>(arr[0]) +
                     static_cast<long>(arr[1]) +
                     static_cast<long>(arr[2]) +
                     static_cast<long>(arr[3]);

    cout << min << " " << max << endl;

}

int main() {

    string arr_temp_temp;
    getline(cin, arr_temp_temp);

    vector<string> arr_temp = split(rtrim(arr_temp_temp));

    vector<int> arr(5);

    for (int i = 0; i < 5; i++) {
        int arr_item = stoi(arr_temp[i]);

        arr[i] = arr_item;
    }

    miniMaxSum(arr);

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
            s.begin(),
            find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
            find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
            s.end()
    );

    return s;
}

vector<string> split(const string &str) {
    vector<string> tokens;

    string::size_type start = 0;
    string::size_type end = 0;

    while ((end = str.find(" ", start)) != string::npos) {
        tokens.push_back(str.substr(start, end - start));

        start = end + 1;
    }

    tokens.push_back(str.substr(start));

    return tokens;
}
