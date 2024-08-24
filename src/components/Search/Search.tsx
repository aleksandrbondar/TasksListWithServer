/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from 'react';
import { TaskInterface, searchValuesInterface } from '../../types/tasksApp.interface';
import { FilterBtn, BtnWrapper, InputsWrapper, MessageWrapper, SearchResultMessage, SearchWrapper, SearchInput } from './Style';
import Checkbox from '../Checkbox/Checkbox';


const Search = ({ children, sortedList, searchValues, setSearchValues }: { children?: React.ReactNode, sortedList: TaskInterface[], searchValues: searchValuesInterface, setSearchValues: React.Dispatch<React.SetStateAction<searchValuesInterface>> }) => {
  const [showSearch, setShowSearch] = useState(false)

  function changeSort(event: ChangeEvent<HTMLInputElement>) {
    const { id, value, type, checked } = event.target;
    setSearchValues((prevValues) => ({
      ...prevValues,
      [id]: type === 'checkbox' ? checked : value
    }));
  }

  function clearSearch() {
    setSearchValues({
      searchValue: '',
      onlyCompleted: false,
      newestFirst: false
    })
    setShowSearch(false)
  }


  return (
    <div className="container">
      <SearchWrapper>
        <SearchResultMessage>
          <MessageWrapper>
            {sortedList.length} tasks found ({sortedList.filter((task) => task.completed).length} completed)
          </MessageWrapper>
          <BtnWrapper>
            {showSearch && <FilterBtn type="button" onClick={clearSearch}>Clear filters</FilterBtn>}
            <FilterBtn type="button" onClick={() => setShowSearch(!showSearch)}>{showSearch ? "Hide" : "Show"} filters</FilterBtn>

          </BtnWrapper>
          {children}
        </SearchResultMessage>

        {showSearch &&
          <InputsWrapper>
            <SearchInput id='searchValue' placeholder="Search task" value={searchValues.searchValue} onChange={(e) => changeSort(e)} />
            <Checkbox id="newestFirst" checked={searchValues.newestFirst} onChange={(e) => changeSort(e)}>Newest first:</Checkbox>
            <Checkbox id="onlyCompleted" checked={searchValues.onlyCompleted} onChange={(e) => changeSort(e)}>Only completed:</Checkbox>
          </InputsWrapper>
        }

      </SearchWrapper>
    </div>
  )
}

export default Search