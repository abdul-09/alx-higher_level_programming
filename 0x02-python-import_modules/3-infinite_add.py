#!/usr/bin/python3

def total_args(argv):
    j = len(argv) - 1
    if j == 0:
        print("{:d}".format(j))
        return
    else:
        i = 1
        add = 0
        while i <= j:
            add += int(argv[i])
            i += 1
        print("{:d}".format(add))

if __name__ == "__main__":
    import sys
    total_args(sys.argv)
