#!/bin/python3

# from weilun_x on the discussion

import math
import os
import random
import re
import sys

#
# Complete the 'pylons' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER k
#  2. INTEGER_ARRAY arr
#
def pylons(k, arr):
	no_luck=True
	for a in range(k-1,-1,-1):
		print(a)
		if arr[a]==1:
			no_luck=False
			break
	if no_luck==True:
		return(-1)

	print(a)
			   
	pylon_count=1
	while a<len(arr)-k:
		a=a+2*(k-1)+1
		no_luck=True
		for i in range(2*(k-1)+1):
			if arr[min(a-i,len(arr)-1)]==1:
				pylon_count+=1
				a=a-i
				no_luck=False
				break
		if no_luck==True:
			return(-1)
	return(pylon_count)

if __name__ == '__main__':
	# fptr = open(os.environ['OUTPUT_PATH'], 'w')

	first_multiple_input = input().rstrip().split()

	n = int(first_multiple_input[0])

	k = int(first_multiple_input[1])

	arr = list(map(int, input().rstrip().split()))

	result = pylons(k, arr)

	print(result)

	# fptr.write(str(result) + '\n')

	# fptr.close()
