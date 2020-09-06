import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PBox = ({value, index}) => {
    if (value == 1) { 
        return (
            <PaginationItem active>
                <PaginationLink href={`/images/${index}`} >
                    {index + 1}
                </PaginationLink >
            </PaginationItem>
        )
    } else {
        return (
            <PaginationItem>
                <PaginationLink href={`/images/${index}`} >
                    {index + 1}
                </PaginationLink >
            </PaginationItem>
        )
    }
}

const PaginationBar = ({pagesNum, page}) => {
    let arr = []
    for (var i=1; i<=pagesNum; i++) {
        if (i == page) { 
            arr.push(1);
        }
        else { arr.push(0); } 
    }

    return (
        <Pagination>
            {arr.map((value, index) => {
                return <PBox value={value} index={index} />
            })} 
        </Pagination>
    )
}

export default PaginationBar;