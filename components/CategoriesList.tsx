import React from 'react';
import {categoriesData} from "@/testdata/data";
import Link from "next/link";

const CategoriesList = () => {
    return (
        <div className={'flex gap-2 text-sm flex-wrap'}>
            {categoriesData && categoriesData.map((el,i)=>(
                <Link className={'px-4 py-1 rounded-md bg-slate-800 text-white cursor-pointer'}
                      key={i}
                      href={`/categories/${el.name}`}>
                    {el.name}
                </Link>
            ))}
        </div>
    );
};

export default CategoriesList;