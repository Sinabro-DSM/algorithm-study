from typing import List

def solution(people: List, limit: int) -> int:
    people.sort()

    boat = len(people)
    start_index = 0

    for i in range(len(people)-1, 0, -1):
        if start_index == i:
            break
        
        if people[start_index] + people[i] <= limit:
            boat -= 1
            start_index += 1
        
        if start_index == i:
            break

    return boat