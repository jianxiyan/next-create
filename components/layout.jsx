import Link from 'next/link'
import Router from 'next/router';
import { Button } from 'antd';

function Layout({children}) { 
	return (
        <>
            <Link href="/test/a?id=1">
                {/* //唯一节点 */}
                <Button>A</Button>
            </Link>
            <Link href="/test/b">
                {/* //唯一节点 */}
                <Button>B</Button>
            </Link>
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout;