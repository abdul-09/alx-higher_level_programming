#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    2d = []
    for row in matrix:
        2d.append([c**2 for c in row])
    return (2d)
