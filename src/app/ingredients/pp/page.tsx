"use client";

import React, { useState } from "react";

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="p-6 flex flex-col items-center">
            {/* ช่องค้นหา */}
            <input
                type="text"
                placeholder="ค้นหา..."
                className="w-full max-w-md px-4 py-2 border rounded-full text-lg outline-none shadow-md mb-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;