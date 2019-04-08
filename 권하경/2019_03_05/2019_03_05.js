function solution(skill, skill_trees) {
    let index=[];
    let result=[];
    let count=0;
    for(let i in skill_trees){
        for(let z in skill)
            index[z]=skill_trees[i].indexOf(skill[z]);
        
        result[i]=1;
        for(let z in index){
            if(index[z]==-1){
                for(let y=z;y<index.length;y++){
                    if(index[y]!=-1){
                        result[i]=0;
                        break;
                    }
                }
                break;
            }
            if(z==0)
                continue;
            else{
                if(index[z]<index[z-1]){
                    result[i]=0;
                    break;
                }
            }
        }
    }
    
    for(let i in result)
        if(result[i]) count++;
    return count;
}