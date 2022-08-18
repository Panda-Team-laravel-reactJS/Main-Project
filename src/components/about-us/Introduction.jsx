import { SectionTitle } from "../core";

const Introduction = () => {
	return (
		<section className="introduction">
			<img
				src="http://mauweb.monamedia.net/helenspa/wp-content/uploads/2019/06/img12.jpg"
				alt=""
			/>
			<img
				src="http://mauweb.monamedia.net/helenspa/wp-content/uploads/2019/06/Hover-1.jpg"
				alt=""
			/>

			<div className="introduction-content">
				<SectionTitle title="Giới thiệu chúng tôi" />
				<p className="bottom">
					Hãy chăm sóc cơ thể của bạn, nơi duy nhất bạn phải sống! Đó là một
					ngôi đền sống. Hãy tôn trọng nó, chăm sóc nó và tận hưởng cuộc sống
					của bạn để phát huy hết khả năng của nó … Mona Spa chỉ giúp bạn làm
					điều đó!
				</p>
			</div>
		</section>
	);
};
export default Introduction;
