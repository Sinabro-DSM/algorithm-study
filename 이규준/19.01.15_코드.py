def solution(n):
    answer = 0
    num = [0, 1, 2, 3, 5, 8, 13]

    if n == 0: return 0
    if n == 1: return 1
    if n == 2: return 3
    if n == 3: return 3
    if n == 4: return 5
    if n == 5: return 8
    if n == 6: return 13  
    
    for i in range(7, n + 1):
        num.append((num[i - 1] + num[i - 2])% 1000000007)
    
    return num[n]
