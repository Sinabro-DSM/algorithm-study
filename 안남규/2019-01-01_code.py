def solution(s):
    tmp_1 = list(s)
    tmp_2 = [0]

    for i in tmp_1:
        if tmp_2[-1] == i:
            tmp_2.pop()
            continue

        tmp_2.append(i)

    tmp_2.remove(0)

    if not tmp_2:
        return 1

    return 0

if __name__ == '__main__':
    print(solution('baabaa'))