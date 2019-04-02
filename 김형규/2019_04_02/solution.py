def solution(people, limit):
    people.sort()
    last,i=len(people)-1,0
    while(i<last): 
        if people[i]+people[last]<=limit:
            i+=1
        last-=1
    return len(people)-i
