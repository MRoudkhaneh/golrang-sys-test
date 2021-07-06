import React, {useEffect, useState} from 'react';
import {Col, FormGroup, Input, Label, Row, Spinner} from "reactstrap";
import DataTable from "react-data-table-component";
import {useSelector} from "react-redux";
import ReactPaginate from "react-paginate";

const UserList = () => {

    const {users, loading} = useSelector(state => state.usersList);

    //? State
    const perPageCount = 3;
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        setData(users);
        setTotalPage(users && users.length / perPageCount);
    }, [users, perPageCount, data, totalPage]);
    //? Table config
    const columns = [
        {
            name: '#',
            selector: (row, index) => (
                <span>
                    {(index + 1) + (perPageCount * (currentPage - 1))}
                </span>
            ),
            sortable: false,
            maxWidth: '100px',
        },
        {
            name: 'username',
            selector: row => (
                <span className="ml-1">
                    {`@${row.username}`}
                </span>
            ),
            sortable: false,
            minWidth: '100px',
        },
        {
            name: 'full name',
            selector: row => row.name,
            sortable: false,
            minWidth: '100px',
        },
        {
            name: 'email',
            selector: row => row.email,
            sortable: false,
            minWidth: '70px',
        },
    ];

    //? Handle changePagination
    const handlePagination = page => {
        setCurrentPage(page.selected + 1)
    };

    //? Pagination config
    const CustomPagination = () => (
        <ReactPaginate
            previousLabel='«'
            nextLabel='»'
            forcePage={currentPage - 1}
            onPageChange={page => handlePagination(page)}
            pageCount={filteredData.length ? filteredData.length / perPageCount : data.length / perPageCount}
            breakLabel='...'
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            activeClassName='active'
            pageClassName='page-item'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            nextLinkClassName='page-link'
            nextClassName='page-item next'
            previousClassName='page-item prev'
            previousLinkClassName='page-link'
            pageLinkClassName='page-link'
            containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
        />
    );
    //? search
    const handelSearchValue = (e) => {
        if (e !== '') {
            setCurrentPage(1);
            const temp = [...users];
            let searchFilter = temp.filter(item => {
                return item.username.toLowerCase().includes(e.toLowerCase())
                    || item.name.toLowerCase().includes(e.toLowerCase())
                    || item.email.toLowerCase().includes(e.toLowerCase())
            });
            setFilteredData(searchFilter);
        } else {
            setFilteredData([])
        }
    };
    const filterUserName = (e) => {
        if (e !== 'all') {
            const temp = [...users];
            let filterUsers = temp.filter(item => item.username === e);
            setFilteredData(filterUsers)
        } else {
            setFilteredData([])
        }
    };

    return (
        <Row>
            <Col sm={12}
                 md={6}>
                <FormGroup>
                    <Label>Search:</Label>
                    <Input type="text"
                           placeholder="search some thing!"
                           value={searchValue}
                           maxLength={16}
                           onChange={e => {
                               setSearchValue(e.target.value);
                               handelSearchValue(e.target.value)
                           }}/>
                </FormGroup>
            </Col>
            <Col sm={12}
                 md={6}>
                <FormGroup>
                    <Label>find user:</Label>
                    <Input
                        className='dataTable-select'
                        type='select'
                        id='reservationsPay-select'
                        onChange={e => filterUserName(e.target.value)}>
                        <option value={'all'}>
                            all
                        </option>
                        {data && data.map(item => (
                            <option value={`${item.username}`}
                                    key={item.id}>
                                {item.username}
                            </option>
                        ))}
                    </Input>
                </FormGroup>
            </Col>
            <Col md="12"
                 className="mt-5">
                <DataTable
                    highlightOnHover={true}
                    persistTableHead
                    pagination
                    columns={columns}
                    paginationPerPage={perPageCount}
                    className='react-dataTable'
                    paginationDefaultPage={currentPage}
                    paginationComponent={CustomPagination}
                    data={(searchValue.length || filteredData.length) ? filteredData : data}
                    noDataComponent='Sorry, no data found'
                    progressPending={loading}
                    progressComponent={<Spinner type="grow" color="primary"/>}
                />
            </Col>
        </Row>
    )
};

export default UserList;
