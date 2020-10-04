function trashTalkGenerator(job) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  if (!job) {
    return '請選擇一個對象'
  }

  //pick up the collection of task based on the chosen job
  let taskCollection = []

  for (let [key, value] of Object.entries(task)) {
    if (job === key) {
      taskCollection = taskCollection.concat(value)
    }
  }

  return switchENToCN(job) + sample(taskCollection) + sample(phrase)
}

// randomly choose one element from an array
function sample(collection) {
  const randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

//switch the English job title to Chinese job title
function switchENToCN(job) {
  switch (job) {
    case 'engineer':
      return '工程師';
    case 'designer':
      return '設計師';
    case 'entrepreneur':
      return '創業家';
  }
}

module.exports = trashTalkGenerator