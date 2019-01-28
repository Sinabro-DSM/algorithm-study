def solution(clothes):
    answer = 1
    dic = {}
    
    for key, val in clothes:
        dic[val] = dic.get(val, 0) + 1
    
    for i in dic.values():
        answer *= (i+1)
    
    return answer - 1
