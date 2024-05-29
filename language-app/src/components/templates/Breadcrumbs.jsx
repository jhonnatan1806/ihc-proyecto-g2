import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';

function BreadCrumbs(props) {
    let path = '';
	return (
		<Breadcrumbs variant="solid">
			{props.items.map((item, index) => {
				path += index > 1 ? '/' + item.url: item.url;
				return (
					<BreadcrumbItem key={index} href={path}>
						{item.title}
					</BreadcrumbItem>
				);
			})}
		</Breadcrumbs>
	);
}

export default BreadCrumbs;
