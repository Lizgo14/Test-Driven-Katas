const wrap = (line, maxLen) => {
  if (line.length === 0){
    return ''
  }else if (line.length <= maxLen){
    return line
  }else{
    const words = line.split(' ')
    let lineArray=[]
    let soln = ''
    for (let word of words){
      if (soln.length + word.length +1 <= maxLen){
        soln = (soln + ' ' + word).trim()
      }else{
        lineArray.push(soln)
        soln = word
      }
    }
      if(soln.length>0){
        lineArray.push(soln)
      }
    return lineArray.join(' \n')
  }



};
module.exports = wrap;