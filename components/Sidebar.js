import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
            <div>
                <p className="text-white text-2xl font-black">CRM Clientes</p>
            </div>
            <nav className="mt-5 list-none">
                <li>
                    <Link href="/">
                        <p className="text-white mb-2 block">
                            Clientes
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/pedidos">
                        <p className="text-white mb-2 block">
                            Pedidos
                        </p>
                    </Link>
                </li>
            </nav>
        </aside>
    );
}

export default Sidebar;