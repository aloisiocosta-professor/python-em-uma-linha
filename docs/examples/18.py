exec("from functools import cache\n@cache\ndef fib(n):return n if n<2 else fib(n-1)+fib(n-2)\nprint(fib(20))")
