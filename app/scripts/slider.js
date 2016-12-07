export default function slider() {
	$("#range-slider").ionRangeSlider({
		grid: true,
		type: "single",
		from: 1,
		values: ["Не владею", "Использую готовые решения", "Использую готовые решения и умею их переделывать", "Пишу сложный JS с нуля"]
	});
}
