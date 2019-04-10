def solution(n):
    tmp = []
    tmp.append(1)
    tmp.append(2)
    for i in range(2, n+1):
        tmp.append((tmp[i-1] + tmp[i-2]) % 1000000007)
    
    return tmp[i-1]