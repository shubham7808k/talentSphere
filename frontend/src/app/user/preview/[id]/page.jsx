'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Portfolio from '@/app/portfolio/page';
import Portfolio2 from '@/app/portfolio2/page';
import Portfolio3 from '@/app/portfolio3/page';
import Portfolio4 from '@/app/portfolio4/page';
import Portfolio5 from '@/app/portfolio5/page';
import Portfolio6 from '@/app/portfolio6/page';

const Preview = () => {
    const { id } = useParams();
    const [portfolio, setPortfolio] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!id) return;
        const fetchPortfolio = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/portfolio/portfolio/${id}`);
                if (!res.ok) throw new Error('Portfolio not found');
                const data = await res.json();
                setPortfolio(data);
            } catch (err) {
                setError(err.message || 'Error fetching portfolio');
            } finally {
                setLoading(false);
            }
        };
        fetchPortfolio();
    }, [id]);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center min-h-screen text-red-500">{error}</div>;
    }

    if (!portfolio) {
        return <div className="flex justify-center items-center min-h-screen">No portfolio found.</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Portfolio Preview</h1>
            <div className="mt-6">
                {portfolio.template === 'Portfolio' && <Portfolio portfolioData={portfolio.portfolioData} />}
                {portfolio.template === 'Portfolio2' && <Portfolio2 portfolioData={portfolio.portfolioData} />}
                {portfolio.template === 'Portfolio3' && <Portfolio3 portfolioData={portfolio.portfolioData} />}
                {portfolio.template === 'Portfolio4' && <Portfolio4 portfolioData={portfolio.portfolioData} />}
                {portfolio.template === 'Portfolio5' && <Portfolio5 portfolioData={portfolio.portfolioData} />}
                {portfolio.template === 'Portfolio6' && <Portfolio6 portfolioData={portfolio.portfolioData} />}
            </div>
        </div>
    );
};

export default Preview;