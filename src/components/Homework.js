const Homework = () => {
  const template = `
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">Todo List</h1>
          <ul class="items">
            <li class="item_row">
              <div class="item">
                <span class="item_name">내용</span>
                <button class="item_delete_btn">삭제</button>
              </div>
            </li>
          </ul>
        </div>
        <div class="add_container">
          <input type="text" class="add_input">
          <button class="add_btn">추가</button>
        </div>
      </div>
    `;
  return template;
};

export default Homework;
