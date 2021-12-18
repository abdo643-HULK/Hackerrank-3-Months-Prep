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
 * Complete the 'fibonacciModified' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER t1
 *  2. INTEGER t2
 *  3. INTEGER n
 */

fun fibonacciModified(t1: Int, t2: Int, n: Int): Int {
    var bigT2 = t2.toBigInteger()
    var last = t1.toBigInteger() + bigT2.pow(2)
    
    for (i in 0..n-4) {
        val temp = last
        last = bigT2 + last.pow(2)
        bigT2 = temp
    }
    
    return last
}

fun main(args: Array<String>) {
    val first_multiple_input = readLine()!!.trimEnd().split(" ")

    val t1 = first_multiple_input[0].toInt()

    val t2 = first_multiple_input[1].toInt()

    val n = first_multiple_input[2].toInt()

    val result = fibonacciModified(t1, t2, n)

    println(result)
}
