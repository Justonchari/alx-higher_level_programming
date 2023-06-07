#!/usr/bin/python3


def print_last_digit(num):
    last_digit = (num % 10) if num >= 0 else ((num * -1) % 10)
    print(last_digit, end='')
    return (last_digit)
