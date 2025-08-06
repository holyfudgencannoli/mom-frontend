
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './BlogEntryCard.css'

export default function BlogEntryCard({ title, subtitle, content, img_src }) {
    const header = (
        <img alt="" src={img_src} />
    );
    const footer = (
        <>
            <Button label="Download PDF"/>
            <Button label="Read" severity="secondary" style={{ marginLeft: '0.5em' }} />
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title={title} subTitle={subtitle} footer={footer} header={header} className="md:w-25rem">
                <p className="m-0 card-content">
                    {content}
                </p>
            </Card>
        </div>
    )
}
        