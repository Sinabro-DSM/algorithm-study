def solution(people, limit):
    answer = 0
    start_index = 0
    people.sort()
    
    for i in range(len(people)-1, 0, -1):
        if i==start_index:
            break
        if people[i] + people[start_index] <= limit:
            answer+=1
            start_index+=1
            continue
        answer+=1
    return answer

people = [40, 240, 50, 110, 90]
limit = 100
