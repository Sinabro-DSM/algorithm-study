def solution(people, limit):
    answer = 0
    people.sort()
    while len(people) > 0:
        if people[length-1] == limit:
            answer += 1
            people.pop()
        elif 

    print(people)
    return answer


if __name__ == "__main__":
    solution([70, 50, 80, 50], 1)