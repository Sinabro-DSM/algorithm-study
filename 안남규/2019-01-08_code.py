import collections

def solution(clothes):
        answer=1
        x = []
        result = []
        for i in clothes:
                x.append(i[1])
                count = collections.Counter(x)
                y = list(count.values())
        for i in y:
                result.append(i+1)
        for i in range(len(result)):
                answer = answer * result[i]
        
        return answer-1