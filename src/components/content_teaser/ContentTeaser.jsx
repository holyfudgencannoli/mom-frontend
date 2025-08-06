import BlogEntryCard from '../blog_entry_card/BlogEntryCard'
import './ContentTeaser.css'

export default function ContentTeaser() {
    const blogs = [
        {
            title: "Lion's Mane vs. Reishii: Which Is Right For You?",
            subtitle: '6 August 2025',
            content: 'oidhbuwndvuihnsduipvhnwEIPEA',
            img_src: './src/assets/prod_bottle.png'
        },
        {
            title: "Lion's Mane vs. Reishii: Which Is Right For You?",
            subtitle: '6 August 2025',
            content: 'oidhbuwndvuifvhnpIUASHVPUWEA',
            img_src: './src/assets/prod_bottle.png'
        },
        {
            title: "Lion's Mane vs. Reishii: Which Is Right For You?",
            subtitle: '6 August 2025',
            content: 'oihn oijh oih oh oih oiih oih oih oih oih oih oih oih oih oih oih oih oih oih oih oih oih oih oih oih oih oih oih oih oih oih oih oih oih ',
            img_src: './src/assets/prod_bottle.png'
        },
    ]

    return(
        <div id='content-teaser-box'>
            <h1>Hello From ContentTeaser</h1>
            <div id='cards-container'>
                <BlogEntryCard title={blogs[0].title} subtitle={blogs[0].subtitle} content={blogs[0].content} img_src={blogs[0].img_src} />
                <BlogEntryCard title={blogs[1].title} subtitle={blogs[1].subtitle} content={blogs[1].content} img_src={blogs[1].img_src} />
                <BlogEntryCard title={blogs[2].title} subtitle={blogs[2].subtitle} content={blogs[2].content} img_src={blogs[2].img_src} />
            </div>
        </div>
    )
    
}