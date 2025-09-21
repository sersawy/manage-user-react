import Search from '../Search/Search';
import UserCard from '../UserCard/UserCard';
import { Users } from '../../utils/users';
import { useState } from 'react';
const Home = () => {
  const [userList, setUserList] = useState(Users);
  const onSearch = (e) => {
    const str = e.target.value;
    let newList;
    if (str) newList = Users.filter((user) => user.username.includes(str));
    else newList = Users;
    setUserList(newList);
  };
  return (
    <>
      <div className="my-3">
        <Search onSearch={onSearch} />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
        {userList.map((user) => {
          return (
            <div className="col" key={user.id}>
              <UserCard user={user} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
