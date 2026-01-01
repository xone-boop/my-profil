import { Metadata } from 'next';
import PortfolioListing from '@/components/portfolio/PortfolioListing';

export const metadata: Metadata = {
    title: 'Portfolio | DevPortfolio',
    description: 'Lihat koleksi project e-commerce dan landing page yang telah kami kerjakan.',
};

export default function Page() {
    return <PortfolioListing />;
}
