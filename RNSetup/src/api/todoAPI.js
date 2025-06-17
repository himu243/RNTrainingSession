import {
  getItem,
  removeItem,
  setItem,
  STORAGE_KEYS,
} from '../helper/LocalStorageHelper';

// CRUD - CREATE, READ, UPDATE, DELETE

// CREATE
export const simulatedSetListItemData = async item => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Get Previous List of Item if Any
      getItem(STORAGE_KEYS.TODO_LIST).then(data => {
        // Data Exists
        const prevData = data ? JSON.parse(data) : [];
        const newData = JSON.stringify([...prevData, item]);
        setItem(STORAGE_KEYS.TODO_LIST, newData)
          .then(() =>
            resolve({
              status: 200,
              message: 'Data Created Successfully',
              item,
            }),
          )
          .catch(error => reject(error));
      });
    }, 1000);
  });
};

// READ
export const simulateGetTodoListData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      getItem(STORAGE_KEYS.TODO_LIST)
        .then(data => {
          resolve(data ? JSON.parse(data) : []);
        })
        .catch(error => reject(error));
    }, 1000);
  });
};

// UPDATE
export const simulatedUpdateTodoListData = async itemToUpdate => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      getItem(STORAGE_KEYS.TODO_LIST)
        .then(data => {
          if (data) {
            let prevData = JSON.parse(data);
            const indexOfItemtoUpdate = prevData?.findIndex(
              item => item.id === itemToUpdate?.id,
            );
            // prevData[indexOfItemtoUpdate] = {...itemToUpdate};
            /*
            [...(0 to 9), 9 , (10 to 19)]
            */
            const newData = JSON.stringify([
              ...prevData?.slice(0, indexOfItemtoUpdate),
              {
                ...itemToUpdate,
              },
              ...prevData?.slice(indexOfItemtoUpdate + 1),
            ]);

            setItem(STORAGE_KEYS.TODO_LIST, newData)
              .then(() =>
                resolve({
                  status: 200,
                  message: 'Data Updated Successfully',
                  item: itemToUpdate,
                }),
              )
              .catch(error => reject(error));
          }
        })
        .catch(error => reject(error));
    }, 1000);
  });
};

// DELETE
export const simulatedDeleteTodoListData = async item => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      getItem(STORAGE_KEYS.TODO_LIST).then(data => {
        if (data) {
          const prevData = JSON.parse(data)?.filter(
            todoItem => todoItem.id !== item.id,
          );
          const newData = JSON.stringify(prevData);

          setItem(STORAGE_KEYS.TODO_LIST, newData)
            .then(() =>
              resolve({
                status: 200,
                message: 'Data Deleted Successfully',
                item,
              }),
            )
            .catch(error => reject(error));
        } else {
          reject('No TO DO Item exists');
        }
      });
    }, 1000);
  });
};
