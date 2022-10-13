import Layout from '@/components/Layout';
import Section from '@/components/Section';
import questions from '@/data/q-and-a.json';

export default function QandA() {
	const meta = {
		pageTitle: 'Q and A',
		pageDescription: 'is answering some questions',
	};

	return (
		<Layout pageTitle={meta.pageTitle} pageDescription={meta.pageDescription}>
			<Section largeText="Q and A" height="100">
				{questions.items.map((item) => (
					<div key={item.id} className="max-w-2xl">
						<h3 className="font-bold m-0">{item.question}</h3>
						<p className="text-xl mt-4">{item.answer}</p>
					</div>
				))}
			</Section>
		</Layout>
	);
}
