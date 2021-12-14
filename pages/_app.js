import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import 'react-loading-skeleton/dist/skeleton.css';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider defaultTheme="dark">
			<div style={{ minHeight: '100vh' }}>
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
