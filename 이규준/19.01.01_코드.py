def solution(s):
    strlist = list(s)
    stack = []
    stack.extend(strlist[0])

    if len(s) % 2 != 0:
        return 0

    for i in strlist[1:]:
        if len(stack) > 0:
            if stack[-1] == i:
                stack.pop()
            else:
                stack.append(i)
        else:
            stack.append(i)

    if len(stack) > 0:
        answer = 0
    else:
        answer = 1

    return answer
