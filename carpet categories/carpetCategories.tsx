export interface CarpetCategory {
    name: string;
    images: string[];
    price: number;
    description: string;
}

export const carpetCategories: CarpetCategory[] = [
    {
        name: "Khorgin",
        images: [
            "https://res.cloudinary.com/dudhf0avt/image/upload/IMG_0345_uwpmxf.jpg",
            "https://res.cloudinary.com/dudhf0avt/image/upload/IMG_0343_ystocx.jpg",
            "https://res.cloudinary.com/dudhf0avt/image/upload/IMG_0344_kxltzy.jpg",
            "https://res.cloudinary.com/dudhf0avt/image/upload/IMG_0342_mnagxv.jpg",
        ],
        price: 1200,
        description: "The Khorgin carpet is a traditional handwoven piece known for its vibrant colors and intricate geometric patterns. Ideal for adding a touch of cultural heritage to any space."
    },
    {
        name: "Mamluk",
        images: [
            "https://res.cloudinary.com/dudhf0avt/image/upload/2020_10_26_21_31_IMG_0236_mqhwdq.jpg",
            "https://res.cloudinary.com/dudhf0avt/image/upload/2020_10_26_21_31_IMG_0239_rkj6qi.jpg",
            "https://res.cloudinary.com/dudhf0avt/image/upload/2020_10_26_21_31_IMG_0237_g4fq7t.jpg",
            "https://res.cloudinary.com/dudhf0avt/image/upload/Untitled-1_zj9ah5.jpg"
        ],
        price: 1500,
        description: "Mamluk carpets are known for their historical significance and complex designs featuring a blend of Islamic art and vibrant colors. A statement piece for luxurious interiors."
    },
    {
        name: "Zawar",
        images: [
            "https://res.cloudinary.com/dudhf0avt/image/upload/2024_07_30_10_17_IMG_2266_dcgeaw.jpg",
            "https://res.cloudinary.com/dudhf0avt/image/upload/2024_07_30_10_18_IMG_2275_ezx88m.jpg",
            "https://res.cloudinary.com/dudhf0avt/image/upload/2024_07_30_10_16_IMG_2261_y2lvm6.jpg",
            "https://res.cloudinary.com/dudhf0avt/image/upload/2024_07_30_10_17_IMG_2273_jv74id.jpg"
        ],
        price: 1300,
        description: "The Zawar carpet offers a blend of traditional and modern design elements, perfect for contemporary homes seeking a touch of elegance and cultural richness."
    },
    {
        name: "Sultan",
        images: [
            "https://res.cloudinary.com/dudhf0avt/image/upload/2022_07_24_04_06_IMG_8284_yhvkej.jpg",
            "https://res.cloudinary.com/dudhf0avt/image/upload/2022_07_24_04_06_IMG_8285_sndexv.jpg",
            "https://res.cloudinary.com/dudhf0avt/image/upload/2022_07_24_04_06_IMG_8286_fu9uju.jpg",
            "https://res.cloudinary.com/dudhf0avt/image/upload/2022_07_24_04_06_IMG_8283_q9z4ky.jpg"    
        ],
        price: 1600,
        description: "Sultan carpets are crafted with royalty in mind, featuring majestic designs and rich colors. Perfect for making a grand statement in any room."
    },
    {
        name: "Harris",
        images: [
            "https://res.cloudinary.com/dudhf0avt/image/upload/IMG_0365_gtxyq2.jpg",
            "https://res.cloudinary.com/dudhf0avt/image/upload/IMG_0363_ucgutk.jpg",
            "https://res.cloudinary.com/dudhf0avt/image/upload/Untitled-2_cygf3i.jpg",
            "https://res.cloudinary.com/dudhf0avt/image/upload/Untitled-3_m77ebf.jpg"
        ],
        price: 1100,
        description: "The Harris carpet is a durable and stylish option, featuring subtle patterns and neutral tones. It’s the perfect choice for both modern and traditional interiors."
    }
];
