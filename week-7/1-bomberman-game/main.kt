import java.io.*
import java.math.*
import java.security.*
import java.text.*
import java.util.*
import java.util.concurrent.*
import java.util.function.*
import java.util.regex.*
import java.util.stream.*
import kotlin.collections.*
import kotlin.comparisons.*
import kotlin.io.*
import kotlin.jvm.*
import kotlin.jvm.functions.*
import kotlin.jvm.internal.*
import kotlin.ranges.*
import kotlin.sequences.*
import kotlin.text.*

/*
 * Complete the 'bomberMan' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING_ARRAY grid
 */

fun bomberMan(n: Int, grid: Array<String>): Array<String> {
    // Write your code here

}

fun main(args: Array<String>) {
    val first_multiple_input = readLine()!!.trimEnd().split(" ")

    val r = first_multiple_input[0].toInt()

    val c = first_multiple_input[1].toInt()

    val n = first_multiple_input[2].toInt()

    val grid = Array<String>(r, { "" })
    for (i in 0 until r) {
        val gridItem = readLine()!!
        grid[i] = gridItem
    }

    val result = bomberMan(n, grid)

    println(result.joinToString("\n"))
}
