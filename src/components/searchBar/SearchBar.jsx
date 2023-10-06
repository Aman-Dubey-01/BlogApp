'use client'
import { useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './SearchBar.module.css';
import { useRouter } from 'next/navigation';

export const SearchBar = () => {
    const router = useRouter();
    const [showInput, setShowInput] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef(null);

    const handleSearchClick = () => {
        setShowInput(true);
    };

    const handleSubmit = (e) => {
        const isLocalhost = window.location.hostname === 'localhost';
    const urlStart = isLocalhost ? 'http://localhost:3000' : 'https://penchapters.vercel.app';

        router.push(`${urlStart}/allblog?search=${searchValue}`);
        e.preventDefault();
        setSearchValue('');
        // setShowInput(false);
    };

    const handleDocumentClick = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            setShowInput(false);
        }
    };

    useEffect(() => {
        // Add event listener to the document to handle clicks outside the search bar input
        document.addEventListener('click', handleDocumentClick);

        return () => {
            // Remove the event listener when the component unmounts
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div className={styles['search-bar']} ref={inputRef} onClick={handleSearchClick}>
            <form onSubmit={handleSubmit}>
                {showInput &&
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />}
            </form>
                <button ><BsSearch /></button>
        </div>
    );
};
